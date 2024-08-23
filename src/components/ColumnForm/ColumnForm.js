import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span>
            <TextInput
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='Add Title'
            />
            <span>Icon:</span>
            <TextInput
                type="text"
                value={icon}
                onChange={e => setIcon(e.target.value)}
                placeholder='Add Icon'
            />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;