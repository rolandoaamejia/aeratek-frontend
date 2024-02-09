import {
  getAboutUs,
  getBanners,
  getServices,
  getProjects,
  getNews,
  getFooter,
  getMap
} from "@/actions/get-home-info";
import AboutUsCard from "@/components/AboutUsCard";
import Carousel from "@/components/Carousel";
import ContactUs from "@/components/ContactUs";
import Location from "@/components/Location";
import News from "@/components/News";
import ProjectsView from "@/components/ProjectsView";
import ServicesView from "@/components/ServicesView";
import Footer from "@/components/Footer";
import Section from "@/components/Section"
export default async function Home() {
  const banners = await getBanners();
  const aboutUs = await getAboutUs();
  const services = await getServices();
  const projects = await getProjects();
  const news = await getNews();
  const footer = await getFooter();
  const map = await getMap();
  


  if (!banners) return null;
  if (!aboutUs) return null;
  if (!services) return null;
  if (!projects) return null;
  if (!news) return null;
  if (!footer) return null;
  if (!map) return null;

  return (
    <main className="bg-color-bg-general">
      <Carousel banners={banners} />
      <AboutUsCard aboutUs={aboutUs[0]} />
      <ServicesView services={services} />
      {/* <Section services={services} /> */}
      <ProjectsView projects={projects} />
      <Location Maps={map[0]} />
      <News news={news} />
      <ContactUs />
      <Footer Footer={footer[0]} />
    </main>
  );
}
