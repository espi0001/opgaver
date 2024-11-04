import Header from "@/components/Header";
import SignupForm from "@/components/SignupForm";
import MemberList from "@/components/MemberList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-6">
        <Header />
        <SignupForm />
        <MemberList />
      </div>
    </div>
  );
}
