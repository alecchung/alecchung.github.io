import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper';
// import { urlFor, client } from '../../client';
import './Skills.scss';
import { images } from '../../constants';

const experiences = [
  { year: '2018', works: [{ name: 'Git', company: 'Microsoft', desc: 'Maintain git environment' }, { name: 'React', desc: 'Develop React Apps' }] },
  { year: '2019', works: [{ name: 'Git', company: 'Google', desc: 'Maintain git environment' }, { name: 'React', desc: 'Develop React Apps' }] },
  { year: '2020', works: [{ name: 'Git', company: 'Facebook', desc: 'Maintain git environment' }, { name: 'React', desc: 'Develop React Apps' }] },
  { year: '2021', works: [{ name: 'Git', company: 'Microsoft', desc: 'Maintain git environment' }, { name: 'React', desc: 'Develop React Apps' }] }
]

const skills = [
  { name: 'React', bgColor: 'lightgrey', icon: images.cpp },
  { name: 'Node JS', bgColor: 'lightgrey', icon: images.node },
  { name: 'Figma', bgColor: 'lightgrey', icon: images.figma },
  { name: 'Git', bgColor: 'lightgrey', icon: images.git },
  { name: 'JavaScript', bgColor: 'lightgrey', icon: images.javascript }
]

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);
  // const [skills, setSkills] = useState([]);

  // useEffect(() => {


  // client.fetch(experiences).then((data) => {
  // setExperiences(experiences);
  // });

  // client.fetch(skills).then((data) => {
  // setSkills(skills);
  // });
  // }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <div key={index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p key={work.company} className="p-text">{work.company}</p>
                    </motion.div>
                    <Tooltip
                      key={work.name}
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </Tooltip>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);