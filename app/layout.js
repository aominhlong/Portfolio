import Greetings from "./component/Greetings";
import NavBar from "./component/NavBar";
import AboutMe from "./component/AboutMe";
import styles from './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        <Greetings></Greetings>
        <AboutMe></AboutMe>
        {children}
      </body>
    </html>
  )
}
