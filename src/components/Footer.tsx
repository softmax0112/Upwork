import {
  CiFacebook,
  CiLinkedin,
  CiTwitter,
  CiYoutube,
  CiInstagram
} from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#001E00] text-white px-5">
      <div className="flex justify-between">
        <ul>
          <li>About Us</li>
          <li>Feedback</li>
          <li>Community</li>
        </ul>
        <ul>
          <li>Trust, Safety & Security</li>
          <li>Help & Support</li>
          <li>Upwork Foundation</li>
        </ul>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>CA Notice at Collection</li>
        </ul>
        <ul>
          <li>Accessibility</li>
          <li>Desktop App</li>
          <li>Cookie Policy</li>
          <li>Enterprise Solutions</li>
        </ul>
      </div>
      <div className="flex" style={{verticalAlign: "middle"}}>
        Follow Us
        <CiFacebook style={{verticalAlign: "middle"}} />
        <CiLinkedin />
        <CiTwitter />
        <CiYoutube />
        <CiInstagram />
      </div>
      <hr />
      <div className="text-center">
        @ 2015-2023 Upwork Global® Inc.
      </div>
    </footer>
  )
}

export default Footer;