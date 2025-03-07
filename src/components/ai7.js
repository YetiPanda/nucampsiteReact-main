import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  ChevronDown,
  Brain,
  Database,
  Network,
} from "lucide-react";

const AIKnowledgeGraph = () => {
  const [expandedNodes, setExpandedNodes] = useState(new Set());

  const conceptHierarchy = {
    "Machine Learning": {
      icon: Brain,
      children: {
        "Supervised Learning": {},
        "Unsupervised Learning": {},
        "Reinforcement Learning": {},
        "Deep Learning": {
          children: {
            "Neural Architectures": {
              icon: Network,
              children: {
                "Convolutional Neural Network": {},
                "Recurrent Neural Network": {},
                "Transformer Architecture": {},
                "Generative Model": {},
              },
            },
          },
        },
      },
    },
    "Domain Concepts": {
      icon: Database,
      children: {
        "Natural Language Processing": {},
        "Computer Vision": {},
        Robotics: {},
        "Expert System": {},
      },
    },
  };

  const toggleNode = (path) => {
    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  const renderNode = (node, name, path = "") => {
    const currentPath = path ? `${path}.${name}` : name;
    const isExpanded = expandedNodes.has(currentPath);
    const hasChildren = node.children && Object.keys(node.children).length > 0;
    const Icon = node.icon || null;

    return (
      <div key={currentPath} className="ml-4">
        <div
          className="flex items-center p-2 hover:bg-gray-100 rounded cursor-pointer"
          onClick={() => toggleNode(currentPath)}
        >
          {hasChildren && (
            <span className="mr-2">
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </span>
          )}
          {Icon && <Icon size={16} className="mr-2 text-blue-500" />}
          <span className="text-sm">{name}</span>
        </div>

        {isExpanded && hasChildren && (
          <div className="ml-4 border-l border-gray-200">
            {Object.entries(node.children).map(([childName, childNode]) =>
              renderNode(childNode, childName, currentPath)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>AI Knowledge Graph Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-white rounded-lg">
          {Object.entries(conceptHierarchy).map(([name, node]) =>
            renderNode(node, name)
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIKnowledgeGraph;
