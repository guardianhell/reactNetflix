import DefaultLayout from "@/components/Layouts/DefaultLayout"
import Footer from "@/components/Modules/LandingPage/Footer"
import JumboTron from "@/components/Modules/LandingPage/JumboTron"
import SectionDownload from "@/components/Modules/LandingPage/SectionContents/SectionDownload"
import SectionEnjoy from "@/components/Modules/LandingPage/SectionContents/SectionEnjoy"
import SectionFAQ from "@/components/Modules/LandingPage/SectionContents/SectionFAQ"
import SectionKids from "@/components/Modules/LandingPage/SectionContents/SectionKids"
import SectionWatch from "@/components/Modules/LandingPage/SectionContents/SectionWatch"




function Home() {

  return (
    <DefaultLayout>
      <JumboTron />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionKids />
      <SectionFAQ />
      <Footer />
    </DefaultLayout >
  )
}

export default Home