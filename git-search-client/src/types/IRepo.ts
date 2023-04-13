import { ILicense } from "./ILicense"
import { IOwner } from "./IOwner"

export interface IRepo{
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: IOwner
    html_url: string
    description?: string
    fork: boolean
    created_at: string
    updated_at: string
    pushed_at: string
    git_url: string
    ssh_url: string
    clone_url: string
    svn_url: string
    homepage?: string
    size: number
    stargazers_count: number
    watchers_count: number
    language?: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    has_discussions: boolean
    forks_count: number
    mirror_url: any
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license?: ILicense
    allow_forking: boolean
    is_template: boolean
    web_commit_signoff_required: boolean
    topics: any[]
    visibility: string
    forks: number
    open_issues: number
    watchers: number
    default_branch: string
}