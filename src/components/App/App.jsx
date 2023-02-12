import { Profile } from "../Profile/Profile";
import user from '../Profile/user'
import data from '../Statistics/data'
import { Statistics } from "../Statistics/Statistics";
import { FriendList } from "../FriendList/FriendList/FriendList";
import friends from '../FriendList/friends'
import { TransactionHistory } from "../Transactions/TransactionHistory";
import transactions from '../Transactions/transactions'
import { Container } from "../Container/Container.styled";




export const App = () => {
  return (
    <Container>
          <Profile
              avatar={user.avatar}
              username={user.username}
              tag={user.tag}
              location={user.location}
              followers={user.stats.followers}
              views={user.stats.views}
              likes={user.stats.likes} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
