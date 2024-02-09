import { AboutUs } from "@/interfaces/AboutUs";
import { Banner } from "@/interfaces/Banners";
import { Service, ServiceInfoDetail } from "@/interfaces/services";
import { Project, ProjectInfoDetail } from "@/interfaces/Projects";
import { News, NewsInfoDetail } from "@/interfaces/News";
import { Footer } from "@/interfaces/Footer";
import { Maps } from "@/interfaces/Maps";

const endpointUrl = "https://rolando1001.pythonanywhere.com";

export const getBanners = async (): Promise<Banner[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/banners", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get banners");
    const json: Banner[] = await res.json();
    return json;
  } catch (error) {
    console.error("[BANNERS_ERROR] Something went wrong", error);
  }
};

export const getAboutUs = async (): Promise<AboutUs[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/aboutUs", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get About Us");
    const json: AboutUs[] = await res.json();
    return json;
  } catch (error) {
    console.error("[ABOUTUS_ERROR] Something went wrong", error);
  }
};

export const getServices = async (): Promise<Service[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/services", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get Services");
    const json: Service[] = await res.json();
    return json;
  } catch (error) {
    console.error("[SERVICES_ERROR] Something went wrong", error);
  }
};

export const getProjects = async (): Promise<Project[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/projects", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get Projects");
    const json: Project[] = await res.json();
    return json;
  } catch (error) {
    console.error("[PROJECTS_ERROR] Something went wrong", error);
  }
};

export const getNews = async (): Promise<News[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/news", { cache: "no-store" });
    if (!res.ok) throw new Error("Error trying to get News");
    const json: News[] = await res.json();
    return json;
  } catch (error) {
    console.error("[NEWS_ERROR] Something went wrong", error);
  }
};

export const getFooter = async (): Promise<Footer[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/footer", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get Footer");
    const json: Footer[] = await res.json();
  
    
      return json;
  } catch (error) {
    
  }
};

export const getMap = async (): Promise<Maps[] | undefined> => {
  try {
    const res = await fetch(endpointUrl + "/api/maps", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Error trying to get Map");
    const json: Maps[] = await res.json();
  
   
      return json;
  } catch (error) {
    console.error("[MAP_ERROR] Something went wrong", error);
  }
};

export const getCarouselImages = async (
  endpoint: string
): Promise<
  NewsInfoDetail | ProjectInfoDetail | ServiceInfoDetail | undefined
> => {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error("Error trying to get carousel Images");
    const json: NewsInfoDetail | ProjectInfoDetail | ServiceInfoDetail =
      await res.json();
    return json;
  } catch (error) {
    console.error("[CAROUSEL_IMAGE_MODAL] Something went wrong", error);
    return;
  }
};
