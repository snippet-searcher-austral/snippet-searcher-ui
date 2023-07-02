import {SnippetOperations} from "@/data/snippetOperations";
import autoBind from "auto-bind";
import {CreateSnippet, Snippet, SnippetDescriptor, UpdateSnippet} from "@/data/snippet";

const baseUrl = 'https://snippet-searcher.southafricanorth.cloudapp.azure.com/'
export class ApiSnippetOperations implements SnippetOperations {
    constructor() {
        autoBind(this)
    }

    createSnippet(createSnippet: CreateSnippet): Promise<SnippetDescriptor> {
        return fetch(baseUrl + 'snippet-manager/snippet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createSnippet)
        }).then(response => response.json()) // parse the response as JSON
            .then(data => {
                return {...data, compliance: 'pending'}; // return the data with additional property
            });
    }

    getSnippetById(id: string): Promise<Snippet | undefined> {
        return fetch(baseUrl + 'snippet-manager/snippet/' + id)
            .then(response => response.json()) // parse the response as JSON
            .then(data => {
                return {...data, compliance: 'pending'}; // return the data with additional property
            });
    }

    async listSnippetDescriptors(): Promise<SnippetDescriptor[]> {
        const snippets = await fetch(baseUrl + 'snippet-manager/snippet')
            .then(response => response.json())
        return snippets.map((snippet: Snippet) => ({...snippet, compliance: 'pending'}))
    }

    updateSnippetById(id: string, updateSnippet: UpdateSnippet): Promise<SnippetDescriptor> {
        return fetch(baseUrl + 'snippet-manager/snippet/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateSnippet)
        }).then(response => response.json()) // parse the response as JSON
            .then(data => {
                return {...data, compliance: 'pending'}; // return the data with additional property
            });
    }
}