import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ColWrap, GeneralText, GeneralWrap, SpotlightText, WrapperSpot, ColA } from '../Home.style';
import { IconQuotes } from 'public/icons';
import { RowWrap, TypographyText } from './PostItem/PostItem.style';
import { RadioSearch } from '@root/src/components/shared/SearchHome/SearchHome.style';
import React, { useState } from 'react';
import ListItem from './ListItem';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

const RecommendProperty = ({ data, t, fontSize }) => {

  const [limitItems, setLimitItems] = React.useState(12);
  // layout for desktop only 8 products if screen is mobile, product will be 20 posts

  const handleResize = (e: any) => {
    if (e.target.outerWidth <= 1025 && e.target.outerWidth >= 768) {
      setLimitItems(6); // Tablet will be 6 items on row
    } else if (e.target.outerWidth <= 768) {
      setLimitItems(0); // List scroll
    } else if (e.target.outerWidth > 1024) {
      setLimitItems(8); //
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize', handleResize, true)
    return () => window.removeEventListener('resize', handleResize, true)
  }, [])

  const [showContent, setShowContent] = useState(true)


  return (
    <WrapperSpot>
      <GeneralText>
        <Typography className="title-general" style={{ fontSize: fontSize ? fontSize : '' }}>Recommend Property</Typography>
        <GeneralWrap>
          <div className="general-between-wrap">
            <div className="general-wrap">
              <IconQuotes />
              <Typography
                className="content-general"
              >
                anh Hùng đừng bỏ qua sự kiện sắp tới nha
              </Typography>
            </div>
            <div onClick={e => setShowContent(showContent ? false : true)} style={{ cursor: "pointer" }}>
              <Typography
                className='content-hide'
              >
                HIDE
              </Typography>
            </div>
          </div>
        </GeneralWrap>
      </GeneralText>
      {showContent && <TypographyText>
        <Grid style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div >
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                row
              >
                <FormControlLabel value="male" control={<Radio />} label="Sell" />
                <FormControlLabel value="other" control={<Radio />} label="Rent" />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ display: 'flex' }} className="my-1">
            <div>
              <Typography
                style={{ textDecoration: 'underline' }}
                className="linkShowPost"
              >
                Show all(56+)
              </Typography>
            </div>
            <div>
              <Typography className="linkShowPost">{'<'}</Typography>
            </div>
            <div>
              <Typography className="linkShowPost">{'>'}</Typography>
            </div>
          </div>
        </Grid>
        {/* <Grid
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        > */}

        <ListItem t={t} data={data} type={1} />
        {/* <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap>
          <ColWrap className="gutter-row" sm={24} lg={6}>
            <ItemPost />
          </ColWrap> */}
        {/* </Grid> */}
      </TypographyText>}
    </WrapperSpot>
  );
};

export default RecommendProperty;
