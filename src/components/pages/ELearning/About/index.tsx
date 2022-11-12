import { SRC_IMAGE } from '@core';
import { Plus, SearchYellow } from '@root/public/icons';
import { TextParagraph } from '@root/src/components/shared';
import { Avatar, Col, Divider, Input, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import {
  ButtonChat,
  ColCustom,
  CustomLikeShare,
  FDesktop,
  PostTitle,
  TeacherContainer,
} from '../ELearning.style';

export default function About({ t }) {
  const text =
    "The Peninsula Private Residences is the finest residential development and home investment asset in Cambodia. The new development offers high investment opportunities, privacy, security, comfort, and luxury lifestyle. This 25-storey condominium is situated in Chroy Changva District, a new residential development zone to the East of the downtown Phnom Penh crossing the Mekong River. The development is located at a distance of approximately 150 meters from the Cambodian-Japanese Friendship Bridge which links the development's area to the city's Central Business District. ng.";
  const text1 =
    "Marques Keith Brownlee, also known professionally as MKBHD, is an American YouTuber and professional ultimate frisbee player, best known for his technology-focused videos as well as his podcast, Waveform: The MKBHD Podcast. Marques posted his first YouTube videos while in high school, breaking down the inner workings of a HP Pavilion laptop he purchased with his saved allowance. His channel took off, and he's since made YouTube videos on smartphones, headphones, camcorders, smartwatches, tablets, speakers, Nike's self-lacing boots and Tesla's Cybertruck. More recently, he's interviewed thought leaders like President Barack Obama.";
  return (
    <div>
      <FDesktop grid={true}>
        <div>
          <Typography
            style={{
              fontSize: 28,
              fontFamily: 'Inter',
              fontWeight: '700',
              marginTop: 72,
              marginBottom: 24,
            }}
          >
            About
          </Typography>
          <TextParagraph t={t} text={text} size={16} transparent={true} />

          <Typography
            style={{
              fontSize: 28,
              fontFamily: 'Inter',
              fontWeight: '700',
              marginTop: 84,
              marginBottom: 24,
            }}
          >
            Teacher
          </Typography>

          <TeacherContainer>
            <div>
              <img src={SRC_IMAGE.AVATARTEACHER} width="100%" />
            </div>
            <span style={{ padding: 15 }}>
              <div style={{ display: 'flex' }}>
                <Typography.Title
                  style={{
                    fontSize: 28,
                    fontWeight: '700',
                    fontFamily: 'Inter',
                    marginBottom: 0,
                  }}
                >
                  Kathryn Murphy
                </Typography.Title>
              </div>
              <span className="align-items-center d-flex mt-2">
                <label
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    fontFamily: 'Inter',
                  }}
                >
                  Merchandising
                </label>
                <Divider
                  type="vertical"
                  style={{ marginRight: 5, marginLeft: 5 }}
                />
                <label
                  style={{
                    fontSize: 16,
                    fontWeight: '500',
                    color: '#7A7A7A',
                    fontFamily: 'Inter',
                  }}
                >
                  Zalo Corp
                </label>
              </span>
              <div style={{ display: 'flex', marginTop: 30, paddingRight: 30 }}>
                <div style={{ marginRight: 20 }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  >
                    200
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      color: '#7A7A7A',
                    }}
                  >
                    Lesson
                  </div>
                </div>
                <div style={{ marginRight: 20 }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  >
                    7000
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      color: '#7A7A7A',
                    }}
                  >
                    Student
                  </div>
                </div>
                <div style={{ marginRight: 20 }}>
                  <div
                    style={{
                      fontSize: 18,
                      fontWeight: '700',
                      fontFamily: 'Inter',
                      justifyContent: 'center',
                      display: 'flex',
                    }}
                  >
                    4
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      fontFamily: 'Inter',
                      color: '#7A7A7A',
                    }}
                  >
                    Experience
                  </div>
                </div>
              </div>
            </span>
          </TeacherContainer>
          <TextParagraph t={t} text={text1} size={16} transparent={true} />
        </div>
      </FDesktop>
    </div>
  );
}
