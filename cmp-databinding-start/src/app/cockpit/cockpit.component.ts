import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output("bpCreated") blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
	// newServerName = '';
    newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
	this.serverCreated.emit({
		serverName: serverNameInput.value,
		 serverContent: this.newServerContent
	 });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
	this.blueprintCreated.emit({
		blueprintName: serverNameInput.value,
		blueprintContent: this.newServerContent
	})
  }

}
