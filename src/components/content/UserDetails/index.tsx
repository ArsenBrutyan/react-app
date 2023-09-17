import React, { useCallback, useMemo } from 'react';
import { data } from 'static/data';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledTable, UserDetailsContainer, UserDetailsFooter } from './styled';
import Button from 'components/common/Button';
import { Preloader } from 'components/common/Preloader';
import { useSelector } from 'react-redux';
import { themeModeSelector } from '@/store/selectors';
import { useIsMobile } from 'hooks/use-is-mobile';

export const UserDetailsContent: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isDarkMode = useSelector(themeModeSelector);
    const isMobile = useIsMobile();

    const currentUser = useMemo(() => {
        return id ? data.find((user) => user.id === +id) : null;
    }, [id]);

    const onBack = useCallback(() => {
        navigate('/list');
    }, [navigate]);

    if (!currentUser) {
        return <Preloader />;
    }

    return (
        <UserDetailsContainer $isDarkMode={isDarkMode}>
            {!isMobile ? (
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentUser?.fullName}</td>
                            <td>{currentUser?.email}</td>
                            <td>{currentUser?.age}</td>
                            <td>{currentUser?.address}</td>
                            <td>
                                <img
                                    width={100}
                                    height={100}
                                    src={currentUser?.image}
                                    alt="User image"
                                    loading="lazy"
                                />
                            </td>
                        </tr>
                    </tbody>
                </StyledTable>
            ) : (
                <StyledTable>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                        </tr>
                        <tr>
                            <td>{currentUser?.fullName}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                        </tr>
                        <tr>
                            <td>{currentUser?.email}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                        </tr>
                        <tr>
                            <td>{currentUser?.age}</td>
                        </tr>
                        <tr>
                            <th>Address</th>
                        </tr>
                        <tr>
                            <td>{currentUser?.address}</td>
                        </tr>
                        <tr>
                            <th>Image</th>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    width={100}
                                    height={100}
                                    src={currentUser?.image}
                                    alt="User image"
                                    loading="lazy"
                                />
                            </td>
                        </tr>
                    </thead>
                </StyledTable>
            )}
            <UserDetailsFooter>
                <Button onClick={onBack}>Go to list page</Button>
            </UserDetailsFooter>
        </UserDetailsContainer>
    );
};
