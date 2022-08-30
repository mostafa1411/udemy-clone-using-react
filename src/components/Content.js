import './Content.css';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ExploreButton from './ExploreButton';
import Cards from './Cards';

const Content = ({ title, description, courses }) => {
    console.log(title);
    console.log(description);
    console.log(courses);
    return (
        <div className="content">
            <SectionTitle title={title} />
            <SectionDescription description={description} />
            <ExploreButton />
            <Cards courses={courses} />
        </div>
    );
};

export default Content;
