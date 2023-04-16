package com.projeto.gitsearchapi.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class SearchResults {
    private List<Repo> repositories;
    private int totalCount;
    private int perPage;
    private int currentPage;
    private int nextPage;
    private int prevPage;
}
