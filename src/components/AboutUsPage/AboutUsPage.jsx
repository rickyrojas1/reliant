import React from 'react';
import './AboutUsPage.scss';

const AboutUsPage = () => (
  <div>
    <div className="about-mission">
      <h2>
        About us
      </h2>
      <p>
        Reliant Fire Hose Testing is an independent testing
        agency established in 2007 to serve the Fire Departments of the
        Hudson Valley and the New York Metropolitan area.Reliant
        provides OSHA required annual fire hose inspection/testing
        in accordance with NFPA 1962 and detailed documentation for
        ISO compliance. We have developed proprietary methods
        and technologies to provide a cutting edge method for
        delivering industry leading service. Reliant is an owner operated
        company, resulting in direct lines of communication that
        provide customer service you can trust. Since its inception, Reliant
        has focused on providing a way for fire departments to
        reduce the strain on their own equipment and on their already busy volunteers.
        Outsourcing your testing requirements saves wear and tear
        on departments equipment and leaves more time for members to
        focus on other firematic operations.
        Reliant has established connections within the industry to
        help create a one stop shop for all of your testing needs. Ask about Pump,
        Ground Ladder, and Aerial Testing Services.
      </p>
    </div>
    <div className="about-mission">
      <h2>Mission Statement</h2>
      <p>
        Reliant strives to provide exceptional service to all of our customers.
        Relieving departments of strenuous and dangerous work. Saving valuable
        drill time, and eliminating the need to put wear and tear on personal equipment.
      </p>
    </div>
    <div className="members-row">
      <div className="member">
        <h2>President</h2>
        <p>
          Founder and President Edward Johnson of Salisbury Mills Fire Dept. has been
          in the Volunteer Fire service for more than 35 years. In addition to his fire
          service experience, he also worked in the Aviation Industry for more than 30
          years as a certified Aviation Maintenance Inspector, this professional experience
          and skill has shaped Reliants processes and techniques to inspect and test the
          fire hose in your Department.
        </p>
      </div>
      <div className="member">
        <h2>Vice President</h2>
        <p>
          Vice President Bryce Huepler started as an employee of the cooperation in 2014.
          Gaining experience over the years, he has worked his way up in the company to
          the point of partnering with Mr. Johnson. He will be your go to contact for
          all on site operations and is responsible for managing services that strive to
          keep you and your personnel safe.
        </p>
      </div>
    </div>

  </div>
);

export default AboutUsPage;
