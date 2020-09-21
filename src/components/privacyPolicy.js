import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Auth";
import { Redirect, useHistory } from "react-router";
import Navigation from "./landingPageNavigation";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Div100vh from "react-div-100vh";

const useStyles = makeStyles((theme) => ({
  outerContainer: {
    backgroundColor: "rgba(241, 241, 241, 0.7)",
    display: "flex",
    justifyContent: "center",
    fontFamily: "CoreSans, sans-serif",
    fontSize: "14px",
  },
  innerContainer: {
    width: "70%",
    backgroundColor: "#e8e8e8",
    padding: "25px",
  },
}));

export default function () {
  const classes = useStyles();
  /**
   * If user is logged in, route to user home page
   */
  const { currentUser } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div className={classes.outerContainer}>
      <div className={classes.innerContainer}>
        <div>
          <h2>PRIVACY NOTICE</h2>          <br />
          <h3>Last updated September 13, 2020</h3>
          <br />
          Thank you for choosing to be part of our community at Rolll App
          ("Company", "we", "us", "our"). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about this privacy notice, or our practices with
          regards to your personal information, please contact us at
          support@rolll.app.
          <br />
          <br />
          When you visit our website http://www.rolll.app (the "Website"), use
          our mobile application, as the case may be (the "App") and more
          generally, use any of our services (the "Services", which include the
          Website and App), we appreciate that you are trusting us with your
          personal information. We take your privacy very seriously. In this
          privacy notice, we seek to explain to you in the clearest way possible
          what information we collect, how we use it and what rights you have in
          relation to it. We hope you take some time to read through it
          carefully, as it is important. If there are any terms in this privacy
          notice that you do not agree with, please discontinue use of our
          Services immediately.
          <br />
          <br />
          This privacy notice applies to all information collected through our
          Services (which, as described above, includes our ), as well as, any
          related services, sales, marketing or events.
          <br /> <br />
          Please read this privacy notice carefully as it will help you
          understand what we do with the information that we collect.
        </div>          <br />
        <div>
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>          <br />
          <h3>Personal information you disclose to us</h3>
          <br />
          In Short: We collect personal information that you provide to us.
          <br /> <br />
          We collect personal information that you voluntarily provide to us
          when you register on the express an interest in obtaining information
          about us or our products and Services, when you participate in
          activities on the (such as by posting messages in our online forums or
          entering competitions, contests or giveaways) or otherwise when you
          contact us.
          <br />
          <br />
          The personal information that we collect depends on the context of
          your interactions with us and the , the choices you make and the
          products and features you use. The personal information we collect may
          include the following:
          <br />
          <br />
          Social Media Login Data. We may provide you with the option to
          register with us using your existing social media account details,
          like your Facebook, Twitter or other social media account.
          <br />
          <br />
          All personal information that you provide to us must be true, complete
          and accurate, and you must notify us of any changes to such personal
          information. <br />          <br />
          <h3>Information automatically collected</h3>
          <br />
          In Short: Some information — such as your Internet Protocol (IP)
          address and/or browser and device characteristics — is collected
          automatically when you visit our .
          <br />
          <br />
          We automatically collect certain information when you visit, use or
          navigate the . This information does not reveal your specific identity
          (like your name or contact information) but may include device and
          usage information, such as your IP address, browser and device
          characteristics, operating system, language preferences, referring
          URLs, device name, country, location, information about how and when
          you use our and other technical information. This information is
          primarily needed to maintain the security and operation of our , and
          for our internal analytics and reporting purposes.
          <br />
          <br />
          Like many businesses, we also collect information through cookies and
          similar technologies.
        </div>          <br />
        <div>
          <h2>WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
          <br />
          In Short: We only share information with your consent, to comply with
          laws, to provide you with services, to protect your rights, or to
          fulfill business obligations.
          <br />
          <br />
          We may process or share your data that we hold based on the following
          legal basis: More specifically, we may need to process your data or
          share your personal information in the following situations:
          <br />
          <br />
          Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
          <br />
          <br />
          Affiliates. We may share your information with our affiliates, in
          which case we will require those affiliates to honor this privacy
          notice. Affiliates include our parent company and any subsidiaries,
          joint venture partners or other companies that we control or that are
          under common control with us.
          <br />
          <br />
          Business Partners. We may share your information with our business
          partners to offer you certain products, services or promotions.
          <br />
          <br />
          Other Users. When you share personal information or otherwise interact
          with public areas of the , such personal information may be viewed by
          all users and may be publicly made available outside the in
          perpetuity. If you interact with other users of our and register for
          our through a social network (such as Facebook), your contacts on the
          social network will see your name, profile photo, and descriptions of
          your activity. Similarly, other users will be able to view
          descriptions of your activity, communicate with you within our , and
          view your profile.
          <br />
          <br />
        </div>
        <div>
          <h2>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES</h2>
          <br />
          In Short: We may use cookies and other tracking technologies to collect
          and store your information.
          <br />
          <br />
          We may use cookies and similar tracking technologies (like web beacons
          and pixels) to access or store information. Specific information about
          how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </div><br />
        <div>
          <h2>HOW DO WE HANDLE YOUR SOCIAL LOGINS</h2>
          <br />
          In Short: If you choose to register or log in to our services using a
          social media account, we may have access to certain information about
          you.
          <br />
          <br />
          Our Services offers you the ability to register and login using your
          third-party social media account details (like your Facebook or
          Twitter logins). Where you choose to do this, we will receive certain
          profile information about you from your social media provider. The
          profile Information we receive may vary depending on the social media
          provider concerned, but will often include your name, email address,
          friends list, profile picture as well as other information you choose
          to make public on such social media platform.
          <br />
          <br />
          We will use the information we receive only for the purposes that are
          described in this privacy notice or that are otherwise made clear to
          you on the relevant . Please note that we do not control, and are not
          responsible for, other uses of your personal information by your
          third-party social media provider. We recommend that you review their
          privacy notice to understand how they collect, use and share your
          personal information, and how you can set your privacy preferences on
          their sites and apps.
        </div><br />
        <div>
          <h2>WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES</h2>
          <br />
          In Short: We are not responsible for the safety of any information
          that you share with third-party providers who advertise, but are not
          affiliated with, our Website.
          <br />
          <br />
          The Services may contain advertisements from third parties that are
          not affiliated with us and which may link to other websites, online
          services or mobile applications. We cannot guarantee the safety and
          privacy of data you provide to any third parties. Any data collected
          by third parties is not covered by this privacy notice. We are not
          responsible for the content or privacy and security practices and
          policies of any third parties, including other websites, services or
          applications that may be linked to or from the Services. You should
          review the policies of such third parties and contact them directly to
          respond to your questions.
        </div><br />
        <div>
          <h2>HOW LONG DO WE KEEP YOUR INFORMATION</h2>
          <br />
          In Short: We keep your information for as long as necessary to fulfill
          the purposes outlined in this privacy notice unless otherwise required
          by law.
          <br />
          <br />
          We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than
          twelve (12) months past the termination of the user's account.
          <br />
          <br />
          When we have no ongoing legitimate business need to process your
          personal information, we will either delete or anonymize such
          information, or, if this is not possible (for example, because your
          personal information has been stored in backup archives), then we will
          securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </div><br />
        <div>
          <h2>HOW DO WE KEEP YOUR INFORMATION SAFE</h2>
          <br />
          In Short: We aim to protect your personal information through a system
          of organizational and technical security measures.
          <br />
          <br />
          We have implemented appropriate technical and organizational security
          measures designed to protect the security of any personal information
          we process. However, despite our safeguards and efforts to secure your
          information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure, so
          we cannot promise or guarantee that hackers, cybercriminals, or other
          unauthorized third parties will not be able to defeat our security,
          and improperly collect, access, steal, or modify your information.
          Although we will do our best to protect your personal information,
          transmission of personal information to and from our Services is at
          your own risk. You should only access the Services within a secure
          environment.
        </div><br />
        <div>
          <h2>WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <br />
          In Short: You may review, change, or terminate your account at any
          time.
          <br />
          If you are a resident in the European Economic Area and you believe we
          are unlawfully processing your personal information, you also have the
          right to complain to your local data protection supervisory authority.
          You can find their contact details here:
          http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.
          <br />
          <br />
          If you are a resident in Switzerland, the contact details for the data
          protection authorities are available here:
          https://www.edoeb.admin.ch/edoeb/en/home.html.
          <br />
          <br />
          If you have questions or comments about your privacy rights, you may
          email us at support@rolll.app.
          <br />
          <br />
          <h3>Account Information</h3>
          <br />
          If you would at any time like to review or change the information in
          your account or terminate your account, you can:
          <br />
          <br />
          Log in to your account settings and update your user account.
          <br />
          <br />
          Upon your request to terminate your account, we will deactivate or
          delete your account and information from our active databases.
          However, we may retain some information in our files to prevent fraud,
          troubleshoot problems, assist with any investigations, enforce our
          Terms of Use and/or comply with applicable legal requirements.
          <br />
          <br />
          Cookies and similar technologies: Most Web browsers are set to accept
          cookies by default. If you prefer, you can usually choose to set your
          browser to remove cookies and to reject cookies. If you choose to
          remove cookies or reject cookies, this could affect certain features
          or services of our Services.
          <br />
          <br />
          Opting out of email marketing: You can unsubscribe from our marketing
          email list at any time by clicking on the unsubscribe link in the
          emails that we send or by contacting us using the details provided
          below. You will then be removed from the marketing email list —
          however, we may still communicate with you, for example to send you
          service-related emails that are necessary for the administration and
          use of your account, to respond to service requests, or for other
          non-marketing purposes. To otherwise opt-out, you may:
        </div><br />
        <div>
          <h2>CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <br />
          Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting you can
          activate to signal your privacy preference not to have data about your
          online browsing activities monitored and collected. At this stage no
          uniform technology standard for recognizing and implementing DNT
          signals has been finalized. As such, we do not currently respond to
          DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for
          online tracking is adopted that we must follow in the future, we will
          inform you about that practice in a revised version of this privacy
          notice.
        </div><br />
        <div>
          <h2>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <br />
          In Short: Yes, if you are a resident of California, you are granted
          specific rights regarding access to your personal information.
          <br />
          <br />
          California Civil Code Section 1798.83, also known as the "Shine The
          Light" law, permits our users who are California residents to request
          and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third
          parties for direct marketing purposes and the names and addresses of
          all third parties with which we shared personal information in the
          immediately preceding calendar year. If you are a California resident
          and would like to make such a request, please submit your request in
          writing to us using the contact information provided below.
          <br />
          <br />
          If you are under 18 years of age, reside in California, and have a
          registered account with a Service, you have the right to request
          removal of unwanted data that you publicly post on the Services. To
          request removal of such data, please contact us using the contact
          information provided below, and include the email address associated
          with your account and a statement that you reside in California. We
          will make sure the data is not publicly displayed on the Services, but
          please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g. backups, etc.).
          <br />
          <br />
          <h3>CPPA Privacy Notice</h3>
          <br />
          The California Code of Regulations defines a "resident" as:
          <br />
          <br />
          (1) every individual who is in the State of California for other than
          a temporary or transitory purpose and (2) every individual who is
          domiciled in the State of California who is outside the State of
          California for a temporary or transitory purpose
          <br />
          <br />
          All other individuals are defined as "non-residents."
          <br />
          <br />
          If this definition of "resident" applies to you, we must adhere to
          certain rights and obligations regarding your personal information.
          <br />
          <br />
          We may also collect other personal information outside of these
          categories instances where you interact with us in-person, online, or
          by phone or mail in the context of:
          <br />
          <br />
          Receiving help through our customer support channels;
          <br />
          Participation in customer surveys or contests; and
          <br />
          Facilitation in the delivery of our Services and to respond to your
          inquiries.
          <br />
          <br />
          <h3>How do we use and share your personal information?</h3>
          <br />
          More information about our data collection and sharing practices can
          be found in this privacy notice.
          <br />
          <br />
          You may contact us by email at support@rolll.app, or by referring to
          the contact details at the bottom of this document.
          <br />
          <br />
          If you are using an authorized agent to exercise your right to opt-out
          we may deny a request if the authorized agent does not submit proof
          that they have been validly authorized to act on your behalf.
          <br />
          <br />
          <h3>Will your information be shared with anyone else?</h3>
          <br />
          We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Each service provider is a for-profit entity that processes the
          information on our behalf.
          <br />
          <br />
          We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological
          development and demonstration. This is not considered to be "selling"
          of your personal data.
          <br />
          <br />
          Rolll App has not disclosed or sold any personal information to third
          parties for a business or commercial purpose in the preceding 12
          months. Rolll App will not sell personal information in the future
          belonging to website visitors, users and other consumers.
          <br /><br />
          <h3>Your rights with respect to your personal data</h3><br />
          Right to request deletion of the data - Request to delete
          <br />
          <br />
          You can ask for the deletion of your personal information. If you ask
          us to delete your personal information, we will respect your request
          and delete your personal information, subject to certain exceptions
          provided by law, such as (but not limited to) the exercise by another
          consumer of his or her right to free speech, our compliance
          requirements resulting from a legal obligation or any processing that
          may be required to protect against illegal activities.
          <br />
          <br />
          Right to be informed - Request to know
          <br />
          <br />
          Depending on the circumstances, you have a right to know:
          <br />
          <br />
          - whether we collect and use your personal information;
          <br />
          <br />
          - the categories of personal information that we collect;
          <br />
          <br />
          - the purposes for which the collected personal information is used;
          <br />
          <br />
          - whether we sell your personal information to third parties;
          <br />
          <br />
          - the categories of personal information that we sold or disclosed for a
          business purpose;
          <br />
          <br />
          - the categories of third parties to whom the personal information was
          sold or disclosed for a business purpose; and
          <br />
          <br />
          - the business or commercial purpose for collecting or selling personal
          information.
          <br />
          <br />
          In accordance with applicable law, we are not obligated to provide or
          delete consumer information that is de-identified in response to a
          consumer request or to re-identify individual data to verify a
          consumer request.
          <br />
          <br />
          Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
          Rights
          <br />
          <br />
          We will not discriminate against you if you exercise your privacy
          rights.
          <br />
          <br />
          <h3>Verification process</h3>
          <br />
          Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information
          in our system. These verification efforts require us to ask you to
          provide information so that we can match it with information you have
          previously provided us. For instance, depending on the type of request
          you submit, we may ask you to provide certain information so that we
          can match the information you provide with the information we already
          have on file, or we may contact you through a communication method
          (e.g. phone or email) that you have previously provided to us. We may
          also use other verification methods as the circumstances dictate.
          <br />
          <br />
          We will only use personal information provided in your request to
          verify your identity or authority to make the request. To the extent
          possible, we will avoid requesting additional information from you for
          the purposes of verification. If, however, if we cannot verify your
          identity from the information already maintained by us, we may request
          that you provide additional information for the purposes of verifying
          your identity, and for security or fraud-prevention purposes. We will
          delete such additionally provided information as soon as we finish
          verifying you.
          <br />
          <br />
          <h3>Other privacy rights</h3>
          <br />
          - you may object to the processing of your personal data
          <br />
          <br />
          - you may request correction of your personal data if it is incorrect or
          no longer relevant, or ask to restrict the processing of the data
          <br />
          <br />
          - you can designate an authorized agent to make a request under the CCPA
          on your behalf. We may deny a request from an authorized agent that
          does not submit proof that they have been validly authorized to act on
          your behalf in accordance with the CCPA.
          <br />
          <br />
          - you may request to opt-out from future selling of your personal
          information to third parties. Upon receiving a request to opt-out, we
          will act upon the request as soon as feasibly possible, but no later
          than 15 days from the date of the request submission.
          <br />
          <br />
          To exercise these rights, you can contact us by email at
          support@rolll.app, or by referring to the contact details at the
          bottom of this document. If you have a complaint about how we handle
          your data, we would like to hear from you.
          <br />
        </div><br />
        <div>
          <h2>DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <br />
          In Short: Yes, we will update this notice as necessary to stay
          compliant with relevant laws.
          <br />
          <br />
          We may update this privacy notice from time to time. The updated
          version will be indicated by an updated "Revised" date and the updated
          version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending
          you a notification. We encourage you to review this privacy notice
          frequently to be informed of how we are protecting your information.
        </div><br />
        <div>
          <h2>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <br />
          If you have questions or comments about this notice, you may email us
          at support@rolll.app
        </div><br />
        <div>
          <h2>
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU
          </h2>
          <br />
          Based on the applicable laws of your country, you may have the right
          to request access to the personal information we collect from you,
          change that information, or delete it in some circumstances. To
          request to review, update, or delete your personal information, please
          visit: http://www.rolll.app. We will respond to your request within 30
          days.
          <br />
          <br />
          This privacy policy was created using Termly’s Privacy Policy
          Generator.
        </div>
      </div>
    </div>
  );
}
