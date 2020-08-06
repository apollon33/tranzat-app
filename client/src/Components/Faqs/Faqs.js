import React from "react";
import Slide from 'react-reveal/Slide';

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core";

import "./Faqs.css";

const Faqs = () => {
  return (
    <div className="faqs">
        <div className="faqs-header">
        <div className="faqs-header__line"></div>
          <h2 className="faqs-header__title">Frequently Ask questions</h2>
          <p className="faqs-header__txt">
            Get your own UK, Eurozone, Australian, New Zealand, and US bank
            details for free in
          </p>
        </div>
        <Slide bottom>
        <Accordion allowToggle="true">
        <div className="faqs-row">
          <div className="faqs-col">
              <AccordionItem>
                <AccordionHeader className="faqs-box__header">
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
           
          </div>
          <div className="faqs-col">
              <AccordionItem>
                <AccordionHeader className="faqs-box__header">
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
          </div>
        </div>
        </Accordion>
        </Slide>
        <Slide bottom>
        <Accordion allowToggle>
        <div className="faqs-row">
          <div className="faqs-col">
              <AccordionItem className="faqs-box">
                <AccordionHeader className="faqs-box__header">
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
          </div>
          <div className="faqs-col">
              <AccordionItem>
                <AccordionHeader className="faqs-box__header">
                  <Box flex="1" textAlign="left">
                    Section 1 title
                  </Box>
                  <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
          </div>
        </div>
        </Accordion>
        </Slide>
    </div>
  );
};

export default Faqs;
