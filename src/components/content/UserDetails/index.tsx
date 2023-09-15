import React, { useCallback, useMemo } from 'react';
import { data } from 'static/data';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledTable, UserDetailsContainer, UserDetailsFooter } from './styled';
import Button from 'components/common/Button';
import { Preloader } from 'components/common/Preloader';
import { useSelector } from 'react-redux';
import { themeModeSelector } from '@/store/selectors';

export const UserDetailsContent: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isDarkMode = useSelector(themeModeSelector);

    const currentUser = useMemo(() => {
        return id ? data.find((user) => user.id === +id) : null;
    }, [id]);

    const onBack = useCallback(() => {
        navigate('/list');
    }, [navigate]);

    return (
        <UserDetailsContainer $isDarkMode={isDarkMode}>
            {!currentUser ? (
                <Preloader />
            ) : (
                <>
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
                    <UserDetailsFooter>
                        <Button onClick={onBack}>Go to list page</Button>
                    </UserDetailsFooter>
                </>
            )}
        </UserDetailsContainer>
    );
};
