import { SRC_IMAGE } from '@core';
import { VectorStar } from '@root/public/icons';
import { Button, Col, Image, Row, Typography } from 'antd';

const RatingReview: React.FC<{}> = () => {
  return (
    <>
      <div className="d-flex align-items-center" style={{ marginTop: '90px' }}>
        <Typography className="rating-review">Rating Review</Typography>
        <VectorStar className="mx-2" />
        <Typography className="review-star">4,88</Typography>
        <Typography className="mx-2 review-star">.</Typography>
        <Typography className="review-star">17 đánh giá</Typography>
      </div>
      <Row className=" m-top-50">
        <Col sm={24} lg={8} className="px-3 pb-4">
          <div className="d-flex">
            <Image
              alt="pic"
              src={SRC_IMAGE.PERSON1}
              height="78px"
              width="78px"
              preview={false}
            />
            <div className="mx-4 mt-3 d-flex align-self-center">
              <div>
                <Typography.Title className="name-review">
                  Arlene McCoy
                </Typography.Title>
                <Typography.Paragraph className="date-review">
                  20/02/2021
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <Typography className="review-comment">
            A real local gem! It only take 1 hour to arrive at the place. You
            can take bus, taxi or even a bike to get there. I really feel loved
            and at peace when I stay there. The house , the garden and
          </Typography>
        </Col>

        <Col sm={24} lg={8} className="px-3 pb-4">
          <div className="d-flex">
            <Image
              alt="pic"
              src={SRC_IMAGE.PERSON2}
              height="78px"
              width="78px"
              preview={false}
            />
            <div className="mx-4 mt-3 d-flex align-self-center">
              <div>
                <Typography.Title className="name-review">
                  Arlene McCoy
                </Typography.Title>
                <Typography.Paragraph className="date-review">
                  20/02/2021
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <Typography className="review-comment">
            Amazing apartment in a fantastic location. Clean, modern and
            spacious with such a comfortable bed. There was a kettle, microwave
            and a few small items for cooking in the
          </Typography>
        </Col>

        <Col sm={24} lg={8} className="px-3 pb-4">
          <div className="d-flex">
            <Image
              alt="pic"
              src={SRC_IMAGE.PERSON3}
              height="78px"
              width="78px"
              preview={false}
            />
            <div className="mx-4 mt-3 d-flex align-self-center">
              <div>
                <Typography.Title className="name-review">
                  Arlene McCoy
                </Typography.Title>
                <Typography.Paragraph className="date-review">
                  20/02/2021
                </Typography.Paragraph>
              </div>
            </div>
          </div>
          <Typography className="review-comment">
            The place is very modern in the strategic condominium location.
            Unfortunately I thought the view of balcony will be to the beach but
            it wasn’t cause the unit location is in the opposite. Very
            informative for the lady who manage the unit.
          </Typography>
        </Col>
      </Row>
      <div className='d-flex justify-content-center my-5'>
        <Button className='button-seemore'>
            <Typography className='seemore-text'>
                See more
            </Typography>
        </Button>
      </div>
    </>
  );
};

export default RatingReview;
