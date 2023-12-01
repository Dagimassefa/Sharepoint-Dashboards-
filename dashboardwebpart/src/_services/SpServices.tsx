import { WebPartContext } from "@microsoft/sp-webpart-base";
import {
  SPHttpClientResponse,
  SPHttpClient,
  ISPHttpClientOptions,
} from "@microsoft/sp-http";

const getHeader = {
  header: {
    accept: "application/json",
  },
};

const postHeader = {
  headers: {
    "content-type": "application/json;odata.metadata=full",
    accept: "application/json;odata.metadata=full",
  },
};

export default class SPService {
  contextt: any = null;
  webUrl = null;
  serverUrl = null;
  constructor(private context: WebPartContext) {
    this.contextt = context;
    this.webUrl = context.pageContext.web.absoluteUrl;
    this.serverUrl = context.pageContext.web.serverRelativeUrl;
  }

  getListItems(listName: string) {
    return this.context.spHttpClient
      .get(
        `${this.webUrl}/_api/web/lists/getById('${listName}')/items?$top=15`,
        SPHttpClient.configurations.v1
      )
      .then((response: SPHttpClientResponse) => response.json())
      .then(
        (data) => data,
        (error) => {
          console.error("Oops Error");
        }
      );
  }
  getAllPagesData() {
    return this.context.spHttpClient
      .get(
        `${this.webUrl}/_api/web/lists/getbytitle('Pages')/items?$select=*,FileRef&$filter=startswith(Title, 'Dashboard For')`,
        SPHttpClient.configurations.v1
      )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error(
            `Error fetching pages data. Status: ${response.status}, ${response.statusText}`
          );
          return null;
        }
      })
      .then((data) => {
        console.log("Filtered Pages data:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error:", error);
        return null;
      });
  }
}
