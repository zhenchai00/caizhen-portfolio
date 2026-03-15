import IndexAboutMe from "@/components/about/IndexAboutMe";
import Hero from "@/components/hero/Hero";
import MainLayout from "@/components/layout/MainLayout";
import IndexProject from "@/components/project/IndexProject";
export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <IndexAboutMe />
      <IndexProject />
    </MainLayout>
  );
}
