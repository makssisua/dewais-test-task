
interface Props {
  user: User
};

const GitProfileCard: React.FC<Props> = ({ user }: Props) => {
  return (
    <>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <div className="flex flex-col items-center pt-10 pb-10">
          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user.avatar_url} alt="User Avatar" />
          <h5 className="mb-1 text-xl font-medium text-gray-900">{user.name}</h5>
          {user.bio
            ? <span className="text-sm text-gray-500 pb-2">{user.bio}</span>
            : <span className="text-sm text-gray-500 pb-2">User bio is empty</span>
          }
          <span className="text-sm text-blue-600 font-bold">
            <a href='https://github.com/makssisua' target="_blank" rel="noreferrer">
              GitHub Profile
            </a>
          </span>
        </div>
      </div>
    </>
  )
}

export default GitProfileCard;