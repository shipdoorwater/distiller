package com.digi.distiller;

import org.springframework.ui.Model;

public interface Command {

	void execute(Model model);
}
