import React from 'react';
import {
    Image,
    Text,
    HStack,
} from '@chakra-ui/react';
import { options } from '../utils/constants';

interface BlogAuthorProps {
    date: string;
    name: string;
}

const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
    return (
        <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="/halim2.jpg"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{new Date(parseInt(props.date, 10)).toLocaleDateString("en-US", options)}</Text>
        </HStack>
    );
};

export default BlogAuthor