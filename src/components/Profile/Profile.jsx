import PropTypes from 'prop-types';
import { ContainerUser,  ContainerImage, Image, UserName, Tag, Location, StatsList, StatsItem, Label, Quantity} from './Profile.styled';

export const Profile = ({ avatar,
    username,
    tag,
    location,
    followers,
    views,
    likes,
}) => {
    return (
      <ContainerUser>
        <ContainerImage>
                <Image
            src={avatar}
            alt="User avatar"
        />
                <UserName>{username}</UserName>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
        </ContainerImage>

  <StatsList>
    <StatsItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
    </StatsItem>
    <StatsItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
    </StatsItem>
    <StatsItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
    </StatsItem>
  </StatsList>
</ContainerUser>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}