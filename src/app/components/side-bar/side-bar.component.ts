import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
// newsData : any;
newsData         = [
  {'title':'WESTERN PRICE SURVEY', 'news':"Cooler weather and reduced demand suppressed energy prices across the West this week.  Natural gas prices trended lower in the West than in any other region, according to the U.S. Energy Information Administration. In the EIA's Wednesday-to-Wednesday report week, PG&E CityGate natural gas values lost $1.17, hitting a weekly low of $6.26/MMBtu on Nov. 3. The agency said the price in Pacific Gas & Electric territory 'fell by more than prices at hubs from which natural gas is sourced for delivery to PG&E.' Prices at Sumas, Opal and Malin also retreated, but by roughly 60 to 80 cents.", 'lastUpdate': 'Last updated 3 mins ago'},
  {'title':'NW FISHLETTER', 'news':'Parties in a legal battle over the operation of federal dams in the Columbia Basin agreed to put the litigation on hold for nine months, and on Oct. 26, U.S. District Judge Michael Simon granted their request.', 'lastUpdate': 'Last updated 4 hours ago'},
  {'title':'WATER POWER WEST', 'news':"The final state regulatory review needed to transfer ownership of the four lower Klamath River dams from PacifiCorp to the Klamath River Renewal Corp. came with the Oregon PUC's license transfer approval on July 27, with conditions to keep the commission informed through the transfer process." , 'lastUpdate': 'Last updated 2 weeks ago'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
