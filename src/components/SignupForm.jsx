import Button from "./Button";
const SignupForm = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-4">
      <input className="h-9 w-full flex-1 appearance-none rounded-md border-0 px-3 text-base font-light tracking-wide shadow outline-indigo-600 ring-1 ring-gray-950/10" type="email" placeholder="Enter an email" />
      <Button variant="primary" text="Send invite" />
    </div>
  );
};

export default SignupForm;
