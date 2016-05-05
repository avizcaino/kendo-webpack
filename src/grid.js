/**
 * Created by alexvizcaino on 21/4/16.
 */

export class BasicUse {
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };
  constructor() {
    this.datasource = {
      type: 'odata',
      transport: {
        read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
      },
      pageSize: 10
    };
  }
}
