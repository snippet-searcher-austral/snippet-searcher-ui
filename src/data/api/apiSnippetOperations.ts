import {SnippetOperations} from "@/data/snippetOperations";
import autoBind from "auto-bind";
import {CreateSnippet, Snippet, SnippetDescriptor, UpdateSnippet} from "@/data/snippet";

const baseUrl = process.env.SNIPPET_API_URL || 'https://snippet-searcher.southafricanorth.cloudapp.azure.com/snippet-manager/'

export class ApiSnippetOperations implements SnippetOperations {
    constructor() {
        autoBind(this)
    }

    createSnippet(createSnippet: CreateSnippet): Promise<SnippetDescriptor> {
        const token = localStorage.getItem('accessToken');

        return fetch(baseUrl + 'snippet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(createSnippet)
        }).then(response => response.json()) // parse the response as JSON
            .then(data => {
                return data; // return the data with additional property
            });
    }

    getSnippetById(id: string): Promise<Snippet | undefined> {
        const token = localStorage.getItem('accessToken');

        return fetch(baseUrl + 'snippet/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json()) // parse the response as JSON
            .then(data => {
                return data; // return the data with additional property
            });
    }

    async listSnippetDescriptors(): Promise<SnippetDescriptor[]> {
        const token = localStorage.getItem('accessToken');

        return await fetch(baseUrl + 'snippet', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(response => response.json());
    }

    updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<SnippetDescriptor> {
        const token = localStorage.getItem('accessToken');

        return fetch(baseUrl + 'snippet/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(updateSnippet)
        }).then(response => response.json()) // parse the response as JSON
            .then(data => {
                return data // return the data with additional property
            });
    }
}