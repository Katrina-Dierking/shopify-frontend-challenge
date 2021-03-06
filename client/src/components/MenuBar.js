import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {useStyles} from '../styles/MenubarStyles';
import {getMovies} from '../actions';
import {connect} from 'react-redux';

function MenuBar(props)
{
    const {getMovies} = props;
    const classes = useStyles();
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies(search);
        setSearch('');
    }
    return (
        <AppBar className={classes.root}>
            <ToolBar>
                <Typography className={classes.title} variant='h6' noWrap>The Shoppies</Typography>
                <div className={classes.search}>
                    <div className={classes.SearchIcon}>
                        <SearchIcon/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <InputBase
                            placeholder='Search...'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{'aria-label': 'search'}}
                            onChange={handleSearch}
                            value={search}
                        />
                    </form>
                </div>
            </ToolBar>
        </AppBar>
    )
}
const mapStateToProps = state => {
    return {...state};
}
export default connect(mapStateToProps, {getMovies})(MenuBar);