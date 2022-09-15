import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tabList: {
            " & .TabsListUnstyled-root": {
                minWidth: "400px",
                backgroundColor: "#E9E9E9",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                alignContent: "space-between",

                "& .TabUnstyled-root": {
                    color: "#222222",
                    cursor: "pointer",
                    fontSize: "0.875rem",
                    fontWeight: "bold",
                    width: "100%",
                    padding: "12px",
                    margin: "6px 6px",
                    border: "none",
                    borderRadius: "7px",
                    display: "flex",
                    justifyContent: "center",

                    "&:hover": {
                        backgroundColor: "#F9BD06 !important",
                    }
                },

                "& .Mui-selected": {
                    backgroundColor: "#F9BD06 !important",
                }
            }
        }
    })
);

interface Option {
    label: string,
    value: string,
}

interface Props {
    items: Option[],
    type: string,
    onClick: Function
}

const TabList = (props: Props) => {
    const classes = useStyles();
    const { items, type, onClick } = props;

    return (
        <TabsUnstyled className={classes.tabList} defaultValue={0}>
            <TabsListUnstyled>
                {items.map(item => (
                    <TabUnstyled
                        onClick={() => onClick(item.value)}
                        style={{ backgroundColor: type == 'property' ? 'transparent' : '#fff' }}
                    >{item.label}</TabUnstyled>
                ))}
            </TabsListUnstyled>
        </TabsUnstyled>
    )
}

export default TabList;