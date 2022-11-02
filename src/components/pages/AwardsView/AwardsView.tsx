import { FC } from 'react';
import { useParams } from 'react-router-dom';

const AwardsView: FC = () => {
    const { kinopoiskId } = useParams();
    return <div>{kinopoiskId}</div>;
};

export default AwardsView;
