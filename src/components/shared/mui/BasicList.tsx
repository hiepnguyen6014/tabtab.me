import { Box, List, ListItem, ListItemButton, ListItemText, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        basicList: {
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            padding: 0,
            maxWidth: "350px",

            '&& .Mui-selected, && .Mui-selected:hover': {
                '&, & .MuiListItemIcon-root': {
                    color: '#222222',
                    backgroundColor: '#F9BD06 !important',
                },
            },
            '& .MuiButtonBase-root': {
                borderRadius: '12px'
            },
            "& .MuiListItemButton-root": {
                minWidth: '71px',
                height: '28px',
                // paddingTop: '20px',
                color: '#222222',
                fontWeight: '700',
                padding: '16px 16px 0px 16px'

            },
            // hover states
            // '& .MuiListItemButton-root:hover': {
            //     bgcolor: '#ffffff',

            //     '&, & .MuiListItemIcon-root': {
            //         color: '#F9BD06',
            //     },
            // },
        }
    })
);

interface Item {
    label: string,
    value: string
}

interface Props {
    items: Item[],
    // type: string,
    // onClick: Function
}




const BasicList = (props: Props) => {
    const classes = useStyles();
    const { items } = props;
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };



    return (
        <Box>
            <List disablePadding className={classes.basicList}>
                {items.map((item, index) =>
                    <ListItemButton selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
                        <span>{item.label}</span>
                        {/* <ListItemText primary={item} /> */}
                    </ListItemButton>)
                }
            </List>
        </Box>
    )
}

export default BasicList;