import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js'

const SearchForm = () => {
    return (
        <div>
            <form className={styles.searchForm}>
                <TextInput placeholder="Search..." />
                <Button><span className="fa fa-magnifying-glass" /></Button>
            </form>
        </div>
    );
};

export default SearchForm;