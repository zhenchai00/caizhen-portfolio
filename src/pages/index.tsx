import IndexAboutMe from "@/components/about/IndexAboutMe";
import Hero from "@/components/hero/Hero";
import MainLayout from "@/components/layout/MainLayout";
export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <IndexAboutMe />
    </MainLayout>
  );
}
