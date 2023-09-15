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
        if (id) {
            return data.find((user) => user.id === +id);
        }
    }, [id]);

    const onBack = useCallback(() => {
        navigate('/list');
    }, [navigate]);

    if (!currentUser) {
        return <Preloader />;
    }

    return (
        <UserDetailsContainer $isDarkMode={isDarkMode}>
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
                            />
                        </td>
                    </tr>
                </tbody>
            </StyledTable>
            <UserDetailsFooter>
                <Button onClick={onBack}>Go to list page</Button>
            </UserDetailsFooter>
        </UserDetailsContainer>
    );
};
