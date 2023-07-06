import { Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

export const UserIcon: FC = () => {
  return (
    <Icon as={FontAwesomeIcon} icon={faCircleUser} boxSize={5} />
  );
};
