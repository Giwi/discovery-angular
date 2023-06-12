import { Component } from '@angular/core';
import { Param } from '@senx/discovery-widgets';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  options: Param = {
    ...new Param(),
    showLoader: true
  }

  warpscript = `{
    'title' 'Test'
    'description' 'Dashboard test'
    'tiles' [ 
      {
        'title' 'test' 
        'options' { 'autoRefresh' 5 }
        'x' 0 'y' 0 'w' 12 'h' 2
        'type' 'area'
        'macro' <%
          1 4 <%
            DROP NEWGTS 'g' STORE
            1 10 <%
              'ts' STORE $g $ts RAND + STU * NOW + NaN NaN NaN RAND ADDVALUE DROP
            %> FOR
            $g
          %> FOR
        %>
      }
    ]
  }`
}
