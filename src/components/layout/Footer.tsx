
import React from "react";
import { Link } from "react-router-dom";
import { Github, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center space-x-2 text-xl font-semibold">
              <span className="text-primary">Nihongo</span>
              <span className="text-nihongo-cherry">Cafe</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              A beautiful Japanese learning platform designed with care to help you
              master the language through immersive content and AI-powered conversation practice.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8">
            <div>
              <h3 className="text-sm font-medium">Explore</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/courses"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    All Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/learning-path"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Learning Paths
                  </Link>
                </li>
                <li>
                  <Link
                    to="/practice"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Practice Area
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/help"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feedback"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Feedback
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/terms"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cookies"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 md:flex md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Nihongo Cafe. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-muted-foreground md:mt-0">
            Designed with care for an optimal learning experience.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
