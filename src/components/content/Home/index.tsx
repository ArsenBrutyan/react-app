import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    StyledFormContainer,
    StyledHomeContainer,
    StyledInput,
    StyledTable,
} from './styled';
import Button from 'components/common/Button';
import { IPosts } from '@/store/types';
import { addPost, removePost } from '@/store/actions';
import { postsSelector, themeModeSelector } from '@/store/selectors';
// import { useIsMobile } from 'hooks/use-is-mobile';

const HomeContent: React.FC = () => {
    const posts = useSelector(postsSelector);
    const isDarkMode = useSelector(themeModeSelector);
    const dispatch = useDispatch();
    const [post, setPost] = useState<IPosts>({
        title: '',
        body: '',
        userId: 1,
    });
    // const isMobile = useIsMobile();

    const handleSubmit = useCallback(
        (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            dispatch(addPost(post));
            setPost({
                title: '',
                body: '',
                userId: 1,
            });
        },
        [dispatch, post],
    );

    const handleRemove = useCallback(
        (id: number | undefined) => {
            dispatch(removePost(id));
        },
        [dispatch],
    );

    return (
        <StyledHomeContainer $isDarkMode={isDarkMode}>
            <StyledFormContainer>
                <h4>Add Post</h4>
                <form onSubmit={handleSubmit}>
                    <StyledInput
                        placeholder="title"
                        value={post.title}
                        onChange={(event) =>
                            setPost({ ...post, title: event.target.value })
                        }
                    />
                    <StyledInput
                        placeholder="body"
                        value={post.body}
                        onChange={(event) =>
                            setPost({ ...post, body: event.target.value })
                        }
                    />
                    <Button disabled={!post.title || !post.body}>Submit</Button>
                </form>
            </StyledFormContainer>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {posts?.map((post) => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>
                                    <Button
                                        onClick={() => handleRemove(post.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </StyledHomeContainer>
    );
};

export default HomeContent;
