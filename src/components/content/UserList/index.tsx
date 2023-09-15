import React, { useCallback, useState } from 'react';
import { data } from 'static/data';
import {
    StyledTable,
    StyledUserListContainer,
    StyledInput,
    StyledTableFooter,
    StyledCell,
} from './styled';
import { IStaticUsers } from '@/store/types';
import { getEndIndex, getStartIndex, getTotalPages } from 'utils/helpers';
import { SortBy, SortType } from './types';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { themeModeSelector } from '@/store/selectors';

export const UserListContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const isDarkMode = useSelector(themeModeSelector);
    const [usersOnCurrentPage, setUsersCurrentPage] = useState<IStaticUsers[]>(
        data.slice(
            getStartIndex(currentPage - 1),
            getEndIndex(currentPage - 1),
        ),
    );
    const [sortType, setSortType] = useState<SortType>({
        name: 'asc',
        age: 'asc',
    });

    const onPreviousClick = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            const arr = data.slice(
                getStartIndex(currentPage - 2),
                getEndIndex(currentPage - 2),
            );
            setUsersCurrentPage([...arr]);
        }
    }, [currentPage]);

    const onNextClick = useCallback(() => {
        if (currentPage < getTotalPages(data.length)) {
            setCurrentPage(currentPage + 1);
            const arr = data.slice(
                getStartIndex(currentPage),
                getEndIndex(currentPage),
            );
            setUsersCurrentPage([...arr]);
        }
    }, [currentPage]);

    const onFilter = useCallback(
        (value: string) => {
            const filteredList = [
                ...data.slice(
                    getStartIndex(currentPage - 1),
                    getEndIndex(currentPage - 1),
                ),
            ];
            setUsersCurrentPage(
                filteredList.filter((e) =>
                    e.name.toLowerCase().includes(value.toLowerCase()),
                ),
            );
        },
        [currentPage],
    );

    const onSort = useCallback(
        (name: SortBy) => {
            if (name === 'name') {
                setSortType({
                    ...sortType,
                    name: sortType.name === 'asc' ? 'desc' : 'asc',
                });
            } else {
                setSortType({
                    ...sortType,
                    age: sortType.age === 'asc' ? 'desc' : 'asc',
                });
            }

            const sortedData = [...usersOnCurrentPage].sort((a, b) => {
                if (name === 'name') {
                    return sortType.name === 'asc'
                        ? a.name.localeCompare(b.name)
                        : b.name.localeCompare(a.name);
                } else if (name === 'age') {
                    return sortType.age === 'asc'
                        ? a.age - b.age
                        : b.age - a.age;
                }
                return 0;
            });
            setUsersCurrentPage([...sortedData]);
        },
        [sortType, usersOnCurrentPage],
    );

    return (
        <StyledUserListContainer $isDarkMode={isDarkMode}>
            <StyledInput
                placeholder="filter"
                onChange={(event) => onFilter(event.target.value)}
            />
            <StyledTable>
                <thead>
                    <tr>
                        <StyledCell onClick={() => onSort('name')}>
                            Name (sort)
                        </StyledCell>
                        <th>Email</th>
                        <StyledCell onClick={() => onSort('age')}>
                            Age (sort)
                        </StyledCell>
                        <th>Actions</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {usersOnCurrentPage.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.actions}</td>
                                <td>
                                    <Link to={`/details/${user.id}`}>
                                        Click to see more info from {user.name}
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
            <StyledTableFooter>
                <Button onClick={onPreviousClick} disabled={currentPage === 1}>
                    Previous
                </Button>
                <span>
                    Page {currentPage} - 10 of {data.length}
                </span>
                <Button
                    onClick={onNextClick}
                    disabled={currentPage === getTotalPages(data.length)}>
                    Next
                </Button>
            </StyledTableFooter>
        </StyledUserListContainer>
    );
};
