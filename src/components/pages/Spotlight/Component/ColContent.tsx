import { SRC_IMAGE } from '@core';
import {
  Heart,
  VectorCoin,
  VectorFacebook,
  VectorLink,
  VectorStar,
  VectorTag,
} from '@root/public/icons';
import { Button, Col, Image, Row, Typography } from 'antd';
import { SpotlightText } from '../Spotlight.style';

const ColContent: React.FC<{}> = () => {
  return (
    <>
      <div className="breadcrumb-detail">
        <Typography className="header-content">Tên Section</Typography>
        <Typography className="header-content">/</Typography>
        <Typography className="header-content">Tên trang đang mở</Typography>
      </div>
      <div className="breadcrumb-detail">
        <Typography className="title-content">
          There are two sides to Glasgow. Cop26 will show only one of them
        </Typography>
      </div>
      <div className="breadcrumb-detail">
        <Typography className="content-intro">
          The glossy optimism of the location is a sleight of hand. Old Glasgow
          has been left to decay
        </Typography>
      </div>
      <Row className="breadcrumb-detail spacing-top baseline-row">
        <Col xs={24} lg={4} className="mb-3">
          <Typography className="content-intro" style={{ color: '#7A7A7A' }}>
            Fri 27 Aug 2021
          </Typography>
        </Col>
        <Col xs={24} lg={20} className="between-item">
          <Button
            className="d-flex align-items-center justify-content-center button-custom"
            style={{ width: '100px', height: '36px' }}
          >
            <div className="baseline-row">
              <Typography className="detail-decorated">A</Typography>
              <Typography className="content-intro">A Text</Typography>
            </div>
          </Button>
          <Button
            className="button-custom "
            style={{ border: '1px solid #F9C41F', height: '36px' }}
          >
            <SpotlightText className="button-review d-flex justify-content-between">
              <VectorStar className="mx-2" />
              <Typography>4,88</Typography>
              <Typography className="mx-2">.</Typography>
              <Typography>17 đánh giá</Typography>
            </SpotlightText>
          </Button>
        </Col>
      </Row>
      <div className="breadcrumb-detail">
        <Image
          alt="spotlight"
          src={SRC_IMAGE.SPOTLIGHTIMG}
          className="img-wrap"
          width="100%"
        />
      </div>

      <Row className="breadcrumb-detail flex-column-reverse flex-lg-row">
        <Col xs={24} sm={24} lg={6} className="d-sm-none d-md-block">
          <div className="d-flex align-items-center">
            <Image
              alt="userTab"
              src={SRC_IMAGE.STAFF5}
              preview={false}
              className="rounded-circle"
            />
            <div className="mx-3">
              <Typography className="name-user">Floyd Miles</Typography>
              <div className="between-item">
                <Typography className="role-user">Sale Manager</Typography>
                <Typography className="mx-1 role-user">|</Typography>
                <Typography className="role-user">Zalo</Typography>
              </div>
              <Typography className="coin-user">24t </Typography>
            </div>
          </div>
          <div className="button-review d-flex my-3">
            <VectorStar className="mx-2" />
            <Typography className="review-text">4,88</Typography>
            <Typography className="mx-2 review-text">.</Typography>
            <Typography className="review-text">17 đánh giá</Typography>
          </div>
          <div className="horizontal-line-content" />
          <div className="side-vertical-content">
            <VectorCoin />
          </div>
          <div className="side-vertical-content">
            <Heart />
            <Typography className="heart-number">12</Typography>
          </div>
          <div className="side-vertical-content">
            <VectorFacebook />
          </div>
          <div className="side-vertical-content">
            <VectorLink />
          </div>
          <div className="side-vertical-content">
            <VectorTag />
          </div>
        </Col>

        <Col xs={24} sm={24} lg={6} className="d-none d-sm-block d-md-none">
          <div className="d-flex align-items-center">
            <Image
              alt="userTab"
              src={SRC_IMAGE.STAFF5}
              preview={false}
              className="rounded-circle"
            />
            <div className="mx-3">
              <Typography className="name-user">Floyd Miles</Typography>
              <div className="between-item">
                <Typography className="role-user">Sale Manager</Typography>
                <Typography className="mx-1 role-user">|</Typography>
                <Typography className="role-user">Zalo</Typography>
              </div>
              <Typography className="coin-user">24t </Typography>
            </div>
          </div>
          <div className="button-review d-flex my-3">
            <VectorStar className="mx-2" />
            <Typography className="review-text">4,88</Typography>
            <Typography className="mx-2 review-text">.</Typography>
            <Typography className="review-text">17 đánh giá</Typography>
          </div>
          <div className="horizontal-line-content" style={{width:"100%"}} />
          <div className="d-flex justify-content-around" style={{marginBottom:"30px"}}>
            <div className="side-vertical-content">
              <VectorCoin />
            </div>
            <div className="side-vertical-content">
              <Heart />
              <Typography className="heart-number">12</Typography>
            </div>
            <div className="side-vertical-content">
              <VectorFacebook />
            </div>
            <div className="side-vertical-content">
              <VectorLink />
            </div>
            <div className="side-vertical-content">
              <VectorTag />
            </div>
          </div>
        </Col>

        <Col xs={24} sm={24} lg={18} style={{ marginBottom: '50px' }}>
          <Typography className="content-paragraph">
            Indian edtech unicorn Unacademy has closed a US$440 million funding
            round led by Temasek, Singapore’s state-owned investment firm. The
            fundraise, with participation from SoftBank Vision Fund, General
            Atlantic, and Tiger Global, values the Bengaluru-based firm at
            US$3.44 billion.
            <br />
            <br />
            Zomato founder and CEO Deepinder Goyal, Oyo founder and CEO Ritesh
            Agarwal, and Mirae Asset Securities also participated in the round.
          </Typography>
          <Image
            alt="content"
            src={SRC_IMAGE.IMAGECONTENT1}
            className="side-vertical-content"
            preview={false}
          />
          <Typography className="content-paragraph">
            The company said it has divided its core offerings across three
            verticals: Unacademy, Relevel, and Graphy. While Unacademy helps
            students crack career-based exams, Relevel strives to get users
            job-ready regardless of their educational background. Graphy will
            give creators the tools to build their online businesses to sell
            digital goods. The company said it has a base of 600,000 paying
            users.
            <br />
            <br />
            Last week, Unacademy announced its acquisition of Rheo TV, a
            Twitch-like game-streaming platform.
            <br />
            <br />
            With the latest round, the edtech major has raised US$860 million to
            date. In November 2020, Unacademy banked an undisclosed amount of
            funding that took its valuation to US$2 billion.
          </Typography>
          <Image
            alt="content"
            src={SRC_IMAGE.ADGOOGLE}
            className="side-vertical-content"
            preview={false}
          />
          <Typography className="content-paragraph">
            Cop26, the UN’s 26th annual conference on climate change, will
            convene on this piece of old dockland in November for what it
            describes as “the world’s last best chance to get runaway climate
            change under control”. As many as 25,000 government representatives,
            media people and environmental climate campaigners are expected;
            Covid regulations for overseas visitors will be relaxed. There is a
            world to be saved – and a civic reputation to be reinvented and
            burnished. The UK government, this year’s Cop president, chose
            Glasgow as the conference venue, and Glasgow is determined to prove
            that better reasons lay behind that decision than a surplus of hotel
            rooms. According to the promotional video the city council made for
            Cop, “Glasgow is a city transformed … a city that continues to
            embrace change” by using its traditions of innovation and of social
            justice to overcome the legacy of its past and give its people a
            cleaner, greener, fairer future. “Glasgow can show the world we are
            becoming the city of our times on [sic] the issues of our times.”
          </Typography>
          <Image
            alt="content"
            src={SRC_IMAGE.IMAGECONTENT2}
            className="side-vertical-content"
            preview={false}
          />
          <Typography className="content-paragraph">
            Promotional videos never speak on oath; still, the language is
            ridiculous. Away from its new riverside, Glasgow is often ruinous.
            Shopping streets – Sauchiehall Street most notably – look shoddy and
            abandoned; shrubs sprout – an unplanned greening – from the roofs of
            Victorian offices. The legacy of its finest architects, Alexander
            “Greek” Thomson and Charles Rennie Mackintosh, faces an uncertain
            future. Thomson’s Egyptian Halls sit, as they have sat for years,
            rotting behind cloth screens and scaffolding in Union Street. Nobody
            can say whether Mackintosh’s Glasgow School of Art, badly damaged by
            fire in 2014 and destroyed in another fire four years later, will be
            rebuilt or in what way. Earlier this year, a confusing
            reorganisation and reduction of refuse collections left rubbish
            piled high on the pavements. Loss of revenue at Glasgow Life – the
            so-called arm’s-length executive organisation that runs the city’s
            culture and sport department – led to the closure of 80 out of 171
            venues, many of them galleries, museums and libraries. Some have
            since reopened, many others not. Around 500 jobs will be lost.
            <br /> <br />
            Naturally, the causes of Glasgow’s degeneration are complicated and
            have long histories. Blame for the most recent failure, however,
            tends to go to the present state of Scottish politics and the fierce
            centralising instincts of the Scottish National party under the
            leadership of the first minister, Nicola Sturgeon. The SNP won
            control of Glasgow city council in 2017 after generations of Labour
            in power, but its city leaders have been found to be ineffective
            local champions. In the words of the journalist and commentator
            Gerry Hassan: “Glasgow councillors are more like agents for the
            national SNP administration in Edinburgh than independent advocates
            for the city that elected them. And yet their city is decaying.
            There’s a real, patent anger about the place.”
            <br /> <br />
            Between 2013 and last year, Glasgow, which remains Scotland’s
            largest city, lost £270 per head per year in funding from the
            Scottish government; only one or two local authorities in Scotland
            did worse. The SNP this week formed a useful alliance with the
            Greens, which may invigorate the party and enhance Scottish
            credibility at Cop26. And so, come November, the new riverside may
            shine with the kind of optimism not seen since John Brown’s shipyard
            launched the Queen Mary. The old city, understandably, reserves the
            right to feel left out.
          </Typography>
        </Col>
      </Row>
    </>
  );
};

export default ColContent;
