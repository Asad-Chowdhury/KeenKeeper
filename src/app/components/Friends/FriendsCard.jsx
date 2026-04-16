import Image from "next/image";
import Link from "next/link";

const FriendsCard = ({ friends = [] }) => {
  if (!friends.length) {
    return (
      <div className="py-10 text-center text-sm">No friends data found.</div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {friends.map((friend) => {
        const statusClass =
          friend.status === "almost due"
            ? "bg-orange-400 border-orange-200"
            : friend.status === "overdue"
              ? "bg-red-800 border-red-200"
              : "bg-green-800 border-green-200";

        return (
          <Link href={`/${friend.id}`} key={friend.id}>
            <div className="card bg-base-100 shadow-sm">
              <figure className="px-6 pt-6">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{friend.name}</h2>
                <p className="text-sm">{friend.days_since_contact}d ago</p>
                <div className="flex gap-2">
                  {friend.tags.map((tag) => (
                    <div key={tag}>
                      <p className="badge bg-green-200 text-sm">{tag}</p>
                    </div>
                  ))}
                </div>
                <div
                  className={`badge rounded-full border capitalize py-3 text-white ${statusClass}`}
                >
                  {friend.status}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsCard;
