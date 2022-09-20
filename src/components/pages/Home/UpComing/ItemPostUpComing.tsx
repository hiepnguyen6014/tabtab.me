import { CalendarTue, VectorCalendar, VectorLocation } from "@root/public/icons";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ArticleWrap, DivWrap, ImageWrap, ItemUpcoming, SpotlightText } from "../Home.style";

const ItemPostUpComing = ({ items }) => {
  return (
    <div className="shadowA">
      <div>
        <ArticleWrap>
          <ImageWrap
            alt="imagePost"
            src={items.image}
            height="100%"
            width="100%"
          // preview={false}
          />
          <DivWrap>
            <div className="info-calendar">
              {items.calendar}
            </div>
          </DivWrap>
        </ArticleWrap>

        <SpotlightText className="mt-1">
          <Typography className="date-upcoming">
            {items.date}
          </Typography>
          <Typography className="contentPostSpot">
            {items.content}
          </Typography>
        </SpotlightText>
      </div>
      <ItemUpcoming>
        <div className="button-calendar">
          <VectorLocation />
          <SpotlightText>
            <Typography>{items.address}</Typography>
          </SpotlightText>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            // style={{
            //   width: '100%',
            //   background: 'rgba(249, 196, 31, 0.1)',
            //   border: '1px solid #f9c41f',
            //   display: 'flex',
            //   justifyContent: 'center',
            //   alignItems: 'center',
            //   borderRadius: '8px',
            //   cursor: 'pointer',
            // }}
            // icon={<VectorCalendar />}
            style={{ textAlign: 'center' }}
          >
            <label
              style={{
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'Inter',
                lineHeight: '18px',
                marginLeft: '5px',
                // textAlign: 'center'
              }}
            >
              Add to Calendar
            </label>
          </Button>
        </div>
      </ItemUpcoming>
    </div>
  );
};

export default ItemPostUpComing;
