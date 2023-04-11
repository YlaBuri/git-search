package com.projeto.gitsearchapi.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.projeto.gitsearchapi.model.Repo;
import com.projeto.gitsearchapi.model.User;
import com.projeto.gitsearchapi.service.UserService;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/user")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> findUser(@PathVariable String username) {
        User user = userService.findUser(username);

        return ResponseEntity.ok().body(user);
    }

    @GetMapping("/{username}/repos")
    public ResponseEntity<List<Repo>> findRepos(@PathVariable String username) {

        List<Repo> repos = userService.findRepos(username);

        return ResponseEntity.ok().body(repos);
    }


}
