package com.projeto.gitsearchapi.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class License{
    public String key;
    public String name;
    public String spdx_id;
    public String url;
    public String node_id;
}
