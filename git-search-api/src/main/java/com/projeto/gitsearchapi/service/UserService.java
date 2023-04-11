package com.projeto.gitsearchapi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.projeto.gitsearchapi.model.Repo;
import com.projeto.gitsearchapi.model.User;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;

@Service
public class UserService {

    public User findUser(String username){
        String url = "https://api.github.com/users/" + username;
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);

        ObjectMapper mapper = new ObjectMapper();
        User user = null;

        try {
            user = mapper.readValue(result, User.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return  user;
    }

    public List<Repo> findRepos(String username){
        String url = "https://api.github.com/users/" + username+"/repos";
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<List<Repo>> response = restTemplate.exchange(
                url,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<>() {
                });

        return response.getBody();
    }

}
