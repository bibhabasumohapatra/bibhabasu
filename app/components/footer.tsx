"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { PiBooksFill } from "react-icons/pi";
import { metaData, socialLinks } from "app/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="flex text-lg gap-3.5 float-right transition-opacity duration-300 hover:opacity-90">
      <SocialLink href={socialLinks.twitter} icon={FaXTwitter} />
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.scholar} icon={PiBooksFill} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.youtube} icon={FaYoutube} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <small className="block lg:mt-24 mt-16 text-neutral-600 dark:text-neutral-300">
        <time>© {YEAR}</time>{" "}
        <a
          className="no-underline hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          {metaData.title}
        </a>
        <style jsx>{`
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
        <SocialLinks />
      </small>
    </footer>
  );
}
