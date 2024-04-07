import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";

const AppBreadcrumb = ({ paths }) => {
    return (
        <Breadcrumb colorScheme="orange" spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
            {paths.map((path, index) => (
                <BreadcrumbItem key={index} isCurrentPage={index === paths.length - 1}>
                    <BreadcrumbLink as={Link} to={path.to}>
                        {path.label}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};

export default AppBreadcrumb;
