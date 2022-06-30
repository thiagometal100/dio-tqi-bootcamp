import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as Styled from "./styled";

function Profile(){
    const {githubState} = useGithub();

    return <Styled.Wrapper>
      <Styled.WrapperImg src={githubState.user.avatar}
       alt="Profile avatar"/>
        <Styled.WrapperInfouser>
          <div>
            <h1>{githubState.user.name}</h1>
              <Styled.WrapperUsername>
                <h3>Username: </h3>
                <a href={githubState.user.html_url}
                target="_blank"
                rel="noreferrer">
                  {githubState.user.login}
                  </a>
              </Styled.WrapperUsername>
              <Styled.WrapperUsername>
                <h3>Company:</h3>
                <span>{githubState.user.company}</span>
              </Styled.WrapperUsername>
              <Styled.WrapperUsername>
                <h3>Location:</h3>
                <span>{githubState.user.location}</span>
              </Styled.WrapperUsername>
              <Styled.WrapperUsername>
              <h3>Blog: </h3>
                <a href={githubState.user.blog}
                target="_blank"
                rel="noreferrer">
                  {githubState.user.blog}
                  </a>
              </Styled.WrapperUsername>

          </div>
              <Styled.WrapperStatusCount>
                <div>
                  <h4>Followers</h4>
                  <span>{githubState.user.followers}</span>
                </div>
                <div>
                  <h4>Followings</h4>
                  <span>{githubState.user.following}</span>
                </div>
                <div>
                  <h4>Gists</h4>
                  <span>{githubState.user.public_gists}</span>
                </div>
                <div>
                  <h4>Repositories</h4>
                  <span>{githubState.user.public_repos}</span>
                </div>
              </Styled.WrapperStatusCount>
         </Styled.WrapperInfouser>
    </Styled.Wrapper>;
};

export default Profile;