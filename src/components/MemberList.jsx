import MemberCard from "./MemberCard";

const MemberList = ({ members }) => {
  return (
    <div className="mt-8">
      <h3 className="text-sm text-gray-500">Team members previously added to projects</h3>
      <ul className="mt-4 divide-y border-y">
        {members.map((member) => (
          <MemberCard key={member.id} {...member} />
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
